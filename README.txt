frontend_launch_script.py reads a movie directory and creates a javascript arary of titles which automatically downloads movie posters if online
launcher.sh is the shell file the opens frontend_launch_script

to launch launcher.sh AFTER start up:
sudo nano /etc/rc.local
and add this to bottom line (remove whatever ip stuff that was):
sh [location to launcher.sh]/launcher.sh
then make sure /etc/rc.local file is executable:
sudo chmod +x /etc/rc.local
Finally, enable the service on system boot.
sudo systemctl enable rc-local

AS WELL:
to open the actual webpage, myapp.desktop is found in the /etc/xdg/autostart/ with:
[Desktop Entry]
Exec=/usr/bin/chromium %U --start-fullscreen --start-maximized --app=file:///home/janik/Desktop/ES1050_21Movie/index.html

NOTE: due to delay in the py file, the webpage opens before the py script ends so two reboots are needed to make sure all is good

will prob add gpio loop .py into rc.local after the frontend_launch_script, since it seems rc.local runs async in the background
only thing, that means 45 second delay before any click registor
honestly, could just add a 45s delay in webpage that says "loading"

NO LONGER WORKS BECAUSE PY SCRIPT NEEDS USB WHICH LOADS AFTER START UP:
Ignore 👇
to have launcher.sh run on startup we add it t the crontab by running these in the terminal:
make the .sh an executable:
chmod +x [path to]/launcher.sh
opens crontab:
crontab -e
in crontab file:
@reboot  [path to]/launcher.sh
Ignore 👆