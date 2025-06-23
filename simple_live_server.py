#!/usr/bin/env python3
"""
Simple Live Reload Server for Mobile Development
Serves the dist folder with live reload functionality
"""

import os
import sys
from pathlib import Path

try:
    from livereload import Server
    print("✅ livereload library found")
except ImportError:
    print("❌ livereload library not found. Please install it with: pip install livereload")
    sys.exit(1)

def get_local_ip():
    """Get the local IP address"""
    import socket
    try:
        # Connect to a remote server to get local IP
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        local_ip = s.getsockname()[0]
        s.close()
        return local_ip
    except:
        return "localhost"

def main():
    # Check if dist directory exists
    dist_dir = Path("dist")
    if not dist_dir.exists():
        print("❌ dist directory not found!")
        print("Please run 'npm run build' first to create the dist folder")
        return
    
    # Create server
    server = Server()
    
    # Watch the dist directory for any changes
    server.watch('dist/')
    
    # Get local IP and port
    local_ip = get_local_ip()
    port = 8000
    
    print("\n" + "="*70)
    print("🚀 LIVE DEVELOPMENT SERVER STARTED!")
    print("="*70)
    print(f"📱 Mobile Access: http://{local_ip}:{port}")
    print(f"💻 Local Access:  http://localhost:{port}")
    print("="*70)
    print("📝 Instructions for Mobile:")
    print(f"1. Make sure your phone is connected to the same WiFi network")
    print(f"2. Open your phone's browser (Chrome, Safari, etc.)")
    print(f"3. Type this URL: http://{local_ip}:{port}")
    print(f"4. The website will automatically reload when you make changes!")
    print("="*70)
    print("💡 To make changes:")
    print("   - Edit files in the 'src' folder")
    print("   - Run 'npm run build' to rebuild")
    print("   - The page will automatically refresh on your phone!")
    print("="*70)
    print("🛑 Press Ctrl+C to stop the server")
    print("="*70)
    
    try:
        # Start the server
        server.serve(root='dist', host='0.0.0.0', port=port, open_url=False)
    except KeyboardInterrupt:
        print("\n👋 Server stopped!")
    except Exception as e:
        print(f"❌ Server error: {e}")

if __name__ == "__main__":
    main()
