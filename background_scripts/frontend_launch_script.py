import os

# dir with all movie files
# will also make the movies.txt file there
# absolute location
dir_path = r"./assets"

# list to store files
movie_names = []

# Iterate directory
for path in os.listdir(dir_path):
    # check if current path is a file
    if os.path.isfile(os.path.join(dir_path, path)):
        movie_names.append(path)


# open file in write mode
with open(dir_path+"\movies.txt", 'w') as fp:
    for item in movie_names:
        # write each item on a new line
        fp.write("%s\n" % item)


# LAUNCH index.html IN FULLSCREEN
# STILL FINDING A WAY
