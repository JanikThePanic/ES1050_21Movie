import os
import time
import urllib.request, json

# needs a delay to allow USB to mount in time
time.sleep(45)

# try connection
print("Attempting to connect to the internet...")
def connect(host='http://google.com'):
    try:
        urllib.request.urlopen(host)
        return True
    except:
        return False
online = connect()
if online:
    print("Connection successful.")
else:
    print("Connection unsuccessful.")

# linux ig doesnt do drive letters but just has them under /media/[linux user name]/[usb name]
# lets name our usb "21Movie"
drive_path = '/media/janik/21Movie/'

# scan all thumbnails
thumbnails = []
thmb_path = drive_path + 'thumbnails'
for path in os.listdir(thmb_path):
    # check file existence
    if os.path.isfile(os.path.join(thmb_path, path)):
        # append to array
        thumbnails.append(path.split('.')[0])

# scan all movies
movies = []
dir_path = drive_path + 'movies'
for path in os.listdir(dir_path):
    # check file existence
    if os.path.isfile(os.path.join(dir_path, path)):
        # append to array
        movies.append(path)

print("Finished scanning on drive " + str(drive_path) + " with " + str(len(movies)) + " movies and " + str(len(thumbnails)) + " thumbnails.")

if online and (len(movies) - len(thumbnails)) != 0:
    print("Device online. Attempting to download "  + str(len(movies) - len(thumbnails)) + " movie poster(s).")

# create output array
output = []
for title in movies:
    # create a javascript object for each movie
    stamp = title.split('.')
    poster = 'false'
    if stamp[0] in thumbnails:
        poster = 'true'
    # automatically save poster to thumbnail folder if online
    if(online and poster == 'false'):
        search = stamp[0].replace(" ", "%20")
        with urllib.request.urlopen("https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=" + search) as url:
            if url:
                data = json.load(url)
                if data['results']:
                    path = 'http://image.tmdb.org/t/p/w500/' + data['results'][0]['poster_path']
                    print("Found movie poster for " + stamp[0] + ", saved to thumbail folder.")
                    fp = open(thmb_path + '/' + stamp[0] + '.jpg', 'wb')
                    fp.write(urllib.request.urlopen(path).read())
                    fp.close()
                    poster = 'true'
                else:
                    print("Could not find movie poster for " + stamp[0] + ".")
    # append to array
    output.append("{title: '" + stamp[0] + "', type: '" + stamp[1] + "', thumbnail: " + poster + ", playhead: 0.00}")

# convert the list into a reformatted string
output_string = 'let movies = [' + (', '.join(str(x) for x in output)) + '];'

# define absolute path of dependencey
dep_path = r"../dependency"
# open javascript file in write mode
with open(dep_path+'/movies.js', 'w') as fp:
    # add a new formatted javascript array
    fp.write(output_string)
    fp.write('\n' +  'let drive_path = "' + str(drive_path) + '";')

print("Finished startup, launching HTML...")