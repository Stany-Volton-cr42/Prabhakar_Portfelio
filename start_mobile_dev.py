#!/usr/bin/env python3
"""
Simple Mobile Development Server with Manual Rebuild
"""

import http.server
import socketserver
import socket
import os
import sys
import subprocess
from pathlib import Path

def get_local_ip():
    """Get the local IP address"""
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        local_ip = s.getsockname()[0]
        s.close()
        return local_ip
    except:
        return "localhost"

def build_project():
    """Build the project"""
    print("🔨 Building project...")
    try:
        result = subprocess.run(
            "npm run build", 
            shell=True, 
            cwd="."
        )
        if result.returncode == 0:
            print("✅ Build successful!")
            return True
        else:
            print("❌ Build failed!")
            return False
    except Exception as e:
        print(f"❌ Build error: {e}")
        return False

def main():
    # Initial build
    if not build_project():
        print("Please fix build errors first.")
        return
    
    # Check if dist directory exists
    dist_dir = Path("dist")
    if not dist_dir.exists():
        print("❌ dist directory not found!")
        return
    
    # Change to dist directory
    os.chdir("dist")
    
    # Get network info
    local_ip = get_local_ip()
    port = 8000
    
    print("\n" + "=" * 80)
    print("🚀 MOBILE DEVELOPMENT SERVER STARTED!")
    print("=" * 80)
    print(f"📱 Mobile Access: http://{local_ip}:{port}")
    print(f"💻 Local Access:  http://localhost:{port}")
    print("=" * 80)
    print("📝 Instructions for Mobile:")
    print(f"1. Open your phone's browser and go to: http://{local_ip}:{port}")
    print(f"2. To see changes after editing files:")
    print(f"   - Press Ctrl+C to stop this server")
    print(f"   - Run: python start_mobile_dev.py")
    print(f"   - Refresh your mobile browser")
    print("=" * 80)
    print("🛑 Press Ctrl+C to stop the server")
    print("=" * 80)
    
    # Create and start server
    handler = http.server.SimpleHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("0.0.0.0", port), handler) as httpd:
            print(f"🌐 Server running at http://{local_ip}:{port}")
            print("✅ Ready for mobile testing!")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n👋 Server stopped!")
    except Exception as e:
        print(f"❌ Server error: {e}")

if __name__ == "__main__":
    main()
