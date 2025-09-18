#!/usr/bin/env python3
"""
Setup script for the Cognitive Skills Dashboard project.
This script helps set up the Python environment and install dependencies.
"""

import subprocess
import sys
import os

def run_command(command, description):
    """Run a command and handle errors."""
    print(f"🔄 {description}...")
    try:
        result = subprocess.run(command, shell=True, check=True, capture_output=True, text=True)
        print(f"✅ {description} completed successfully")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ {description} failed: {e.stderr}")
        return False

def main():
    """Main setup function."""
    print("🚀 Setting up Cognitive Skills Dashboard...")
    print("=" * 50)
    
    # Check if Python is available
    if not run_command("python --version", "Checking Python version"):
        print("❌ Python is not installed or not in PATH")
        return False
    
    # Install Python dependencies
    if not run_command("pip install -r requirements.txt", "Installing Python dependencies"):
        print("❌ Failed to install Python dependencies")
        return False
    
    # Check if Node.js is available
    if not run_command("node --version", "Checking Node.js version"):
        print("❌ Node.js is not installed or not in PATH")
        return False
    
    # Install Node.js dependencies
    if not run_command("npm install", "Installing Node.js dependencies"):
        print("❌ Failed to install Node.js dependencies")
        return False
    
    print("\n🎉 Setup completed successfully!")
    print("\nNext steps:")
    print("1. Run 'npm run dev' to start the Next.js dashboard")
    print("2. Run 'jupyter notebook' to open the analysis notebook")
    print("3. Open http://localhost:3000 in your browser")
    
    return True

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
