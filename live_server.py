#!/usr/bin/env python3
"""
Live reload server for development
This will serve your built files and automatically reload when changes are detected
"""

import os
import sys
import subprocess
import threading
import time
from pathlib import Path

try:
    from livereload import Server, shell
except ImportError:
    print("Installing required packages...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "livereload"])
    from livereload import Server, shell

def build_project():
    """Build the project using npm"""
    print("Building project...")
    try:
        result = subprocess.run(["npm", "run", "build"], 
                              capture_output=True, text=True, cwd=".")
        if result.returncode == 0:
            print("✅ Build successful!")
            return True
        else:
            print(f"❌ Build failed: {result.stderr}")
            return False
    except Exception as e:
        print(f"❌ Build error: {e}")
        return False

def get_local_ip():
    """Get the local IP address"""
    import socket
    try:
        # Connect to a remote server to get local IP
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except:
        return "localhost"

def main():
    # Build the project first
    if not build_project():
        print("Initial build failed. Please fix build errors first.")
        return
    
    # Create server
    server = Server()
    
    # Watch for changes in source files and rebuild
    server.watch('src/**/*.tsx', shell('npm run build'))
    server.watch('src/**/*.ts', shell('npm run build'))
    server.watch('src/**/*.css', shell('npm run build'))
    server.watch('src/**/*.js', shell('npm run build'))
    server.watch('public/**/*', shell('npm run build'))
    server.watch('index.html', shell('npm run build'))
    server.watch('package.json', shell('npm run build'))
    server.watch('vite.config.ts', shell('npm run build'))
    server.watch('tailwind.config.js', shell('npm run build'))
    
    # Serve the dist directory
    dist_path = Path("dist")
    if not dist_path.exists():
        print("❌ dist directory not found. Build failed.")
        return
    
    # Get local IP
    local_ip = get_local_ip()
    port = 8000
    
    print("\n" + "="*60)
    print("🚀 LIVE DEVELOPMENT SERVER STARTED!")
    print("="*60)
    print(f"📱 Mobile Access: http://{local_ip}:{port}")
    print(f"💻 Local Access:  http://localhost:{port}")
    print("="*60)
    print("📝 Instructions for Mobile:")
    print(f"1. Make sure your phone is on the same WiFi network")
    print(f"2. Open your phone's browser")
    print(f"3. Go to: http://{local_ip}:{port}")
    print(f"4. Any changes you make to files will auto-reload!")
    print("="*60)
    print("🛑 Press Ctrl+C to stop the server")
    print("="*60)
    
    try:
        # Start the server
        server.serve(root='dist', host='0.0.0.0', port=port, open_url=False)
    except KeyboardInterrupt:
        print("\n👋 Server stopped!")
    except Exception as e:
        print(f"❌ Server error: {e}")

if __name__ == "__main__":
    main()
