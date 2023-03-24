import os

drive_path = 'G:/'

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

# create output array
output = []
for title in movies:
    # create a javascript object for each movie
    stamp = title.split('.')
    poster = 'false'
    if stamp[0] in thumbnails:
        poster = 'true'
    # append to array
    output.append("{title: '" + stamp[0] + "', type: '" + stamp[1] + "', thumbnail: " + poster + "}")

# convert the list into a reformatted string
output_string = 'let movies = [' + (', '.join(str(x) for x in output)) + '];'

# define absolute path of dependencey
dep_path = r"../dependency"
# open javascript file in write mode
with open(dep_path+'/movies.js', 'w') as fp:
    # add a new formatted javascript array
    fp.write(output_string)
    fp.write('\n' +  'let drive_path = "' + str(drive_path) + '";')
    

print("Finished scanning on drive " + str(drive_path) + " with " + str(len(movies)) + " movies and " + str(len(thumbnails)) + " thumbnails.")
