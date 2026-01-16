import sys
import os

# Add the current directory to Python path
sys.path.append(os.path.dirname(__file__))

from main import handler

# Vercel entry point
app = handler