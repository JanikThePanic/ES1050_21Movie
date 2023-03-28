frontend_launch_script.py reads a movie directory and creates a javascript arary of titles which automatically downloads movie posters if online
launcher.sh is the shell file the opens frontend_launch_script
to have launcher.sh run on startup we add it t the crontab by running these in the terminal:
make the .sh an executable:
chmod +x [path to]/launcher.sh
opens crontab:
crontab -e
in crontab file:
@reboot  [path to]/launcher.sh

AS WELL:
to open the actual webpage, myapp.desktop is found in the /etc/xdg/autostart/ with:
[Desktop Entry]
Exec=/usr/bin/chromium %U --start-fullscreen --start-maximized --app=file:///home/janik/Desktop/ES1050_21Movie/index.html
