#!/usr/bin/env python3
"""
Auto-Rebuild Live Server for Mobile Development
Automatically rebuilds the project when source files change and serves with live reload
"""

import os
import sys
import subprocess
import threading
import time
import socket
from pathlib import Path
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

try:
    from livereload import Server
    print("✅ livereload library found")
except ImportError:
    print("❌ livereload library not found. Installing...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "livereload"])
    from livereload import Server
    print("✅ livereload library installed")

try:
    from watchdog.observers import Observer
    from watchdog.events import FileSystemEventHandler
    print("✅ watchdog library found")
except ImportError:
    print("❌ watchdog library not found. Installing...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "watchdog"])
    from watchdog.observers import Observer
    from watchdog.events import FileSystemEventHandler
    print("✅ watchdog library installed")

class BuildHandler(FileSystemEventHandler):
    def __init__(self):
        self.last_build_time = 0
        self.build_delay = 2  # Wait 2 seconds before rebuilding to avoid multiple builds
        
    def on_modified(self, event):
        if event.is_directory:
            return
            
        # Only rebuild for relevant file types
        if any(event.src_path.endswith(ext) for ext in ['.tsx', '.ts', '.js', '.jsx', '.css', '.html']):
            current_time = time.time()
            if current_time - self.last_build_time > self.build_delay:
                self.last_build_time = current_time
                print(f"\n🔄 File changed: {event.src_path}")
                self.rebuild_project()
    
    def rebuild_project(self):
        """Rebuild the project using npm"""
        print("🔨 Rebuilding project...")
        try:
            # Use shell=True for Windows compatibility
            result = subprocess.run(
                "npm run build", 
                shell=True, 
                capture_output=True, 
                text=True, 
                cwd="."
            )
            if result.returncode == 0:
                print("✅ Build successful! Changes will appear on mobile after refresh.")
            else:
                print(f"❌ Build failed: {result.stderr}")
        except Exception as e:
            print(f"❌ Build error: {e}")

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

def initial_build():
    """Perform initial build"""
    print("🔨 Performing initial build...")
    try:
        result = subprocess.run(
            "npm run build", 
            shell=True, 
            capture_output=True, 
            text=True, 
            cwd="."
        )
        if result.returncode == 0:
            print("✅ Initial build successful!")
            return True
        else:
            print(f"❌ Initial build failed: {result.stderr}")
            return False
    except Exception as e:
        print(f"❌ Initial build error: {e}")
        return False

def main():
    print("🚀 Starting Auto-Rebuild Live Server for Mobile Development")
    print("=" * 80)
    
    # Check if dist directory exists, if not perform initial build
    dist_dir = Path("dist")
    if not dist_dir.exists() or not initial_build():
        print("❌ Build failed. Please fix build errors first.")
        return
    
    # Set up file watcher
    event_handler = BuildHandler()
    observer = Observer()
    
    # Watch src directory for changes
    if Path("src").exists():
        observer.schedule(event_handler, "src", recursive=True)
        print("👀 Watching 'src' directory for changes...")
    
    # Watch other important files
    for file_path in ["index.html", "package.json", "vite.config.ts", "tailwind.config.js"]:
        if Path(file_path).exists():
            observer.schedule(event_handler, file_path, recursive=False)
    
    observer.start()
    
    # Create live reload server
    server = Server()
    server.watch('dist/')  # Watch the dist directory for changes
    
    # Get network info
    local_ip = get_local_ip()
    port = 8000
    
    print("\n" + "=" * 80)
    print("🚀 AUTO-REBUILD LIVE SERVER STARTED!")
    print("=" * 80)
    print(f"📱 Mobile Access: http://{local_ip}:{port}")
    print(f"💻 Local Access:  http://localhost:{port}")
    print("=" * 80)
    print("📝 Instructions for Mobile:")
    print(f"1. Make sure your phone is connected to the same WiFi network")
    print(f"2. Open your phone's browser (Chrome, Safari, etc.)")
    print(f"3. Type this URL: http://{local_ip}:{port}")
    print(f"4. Edit files in 'src' folder - changes will auto-rebuild and reload!")
    print("=" * 80)
    print("🔄 Auto-rebuild features:")
    print("   ✅ Watches src/ folder for changes")
    print("   ✅ Automatically runs 'npm run build'")
    print("   ✅ Live reload on mobile browser")
    print("   ✅ No manual refresh needed!")
    print("=" * 80)
    print("🛑 Press Ctrl+C to stop the server")
    print("=" * 80)
    
    try:
        # Start the live reload server
        server.serve(root='dist', host='0.0.0.0', port=port, open_url=False)
    except KeyboardInterrupt:
        print("\n👋 Stopping server...")
        observer.stop()
        observer.join()
        print("✅ Server stopped!")
    except Exception as e:
        print(f"❌ Server error: {e}")
        observer.stop()
        observer.join()

if __name__ == "__main__":
    main()
