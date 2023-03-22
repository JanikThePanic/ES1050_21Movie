import os

# absolute path of movies
dir_path = r"../movies"

# list to store files
movie_names = []

# iterate directory
for path in os.listdir(dir_path):
    # check if current path is a file
    if os.path.isfile(os.path.join(dir_path, path)):
        # add to list
        movie_names.append(path.split('.')[0])

# convert the list into a reformatted string
output_string = '", "'.join(str(x) for x in movie_names)
print(output_string)

# absolute path of dependency files
dep_path = r"../dependency"

# open javascript file in write mode
with open(dep_path+'/movies.js', 'w') as fp:
    # add a new formatted javascript array
    fp.write('let movies = ["' + output_string + '"];')

# LAUNCH index.html IN FULLSCREEN
# STILL FINDING A WAY
