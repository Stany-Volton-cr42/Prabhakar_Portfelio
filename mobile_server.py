#!/usr/bin/env python3
"""
Mobile Development Server
Simple HTTP server that serves the dist folder for mobile testing
"""

import http.server
import socketserver
import socket
import os
import sys
from pathlib import Path

def get_local_ip():
    """Get the local IP address"""
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
    
    # Change to dist directory
    os.chdir("dist")
    
    # Get local IP and port
    local_ip = get_local_ip()
    port = 8000
    
    print("\n" + "="*70)
    print("🚀 MOBILE DEVELOPMENT SERVER STARTED!")
    print("="*70)
    print(f"📱 Mobile Access: http://{local_ip}:{port}")
    print(f"💻 Local Access:  http://localhost:{port}")
    print("="*70)
    print("📝 Instructions for Mobile:")
    print(f"1. Make sure your phone is connected to the same WiFi network")
    print(f"2. Open your phone's browser (Chrome, Safari, etc.)")
    print(f"3. Type this URL: http://{local_ip}:{port}")
    print(f"4. You can now view your website on mobile!")
    print("="*70)
    print("💡 To see changes:")
    print("   - Edit files in the 'src' folder")
    print("   - Run 'npm run build' to rebuild")
    print("   - Refresh the page on your phone to see changes")
    print("="*70)
    print("🛑 Press Ctrl+C to stop the server")
    print("="*70)
    
    # Create server
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
