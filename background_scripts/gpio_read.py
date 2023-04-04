# add to launcher.sh at end:
# sudo python gpio_read.py

import time
import gpio
import os
import keyboard

gpio.setup(10, gpio.IN)

while True:
    if os.popen('gpioget gpiochip1 199').read() == "1\n":
        keyboard.press_and_release("a")
    if os.popen('gpioget gpiochip1 198').read() == "1\n":
        keyboard.press_and_release("b")
