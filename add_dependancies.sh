# !/bin/bash

# any parmeter I want to add in, use dollar sign
# eg $1 == first param, $2 == second, etc
# can name param whatever you want

dependency=$1
container_name="reactnd-project-myreads-starter_app_1"

if [ -z "$dependency" ]
then
    echo "please call script with dependecy you would like to add"
    echo "./add_dependancies.sh {dependecy}"
else
    echo "installing $dependecy"
    echo "running: yarn add $dependecy, in docker container $container_name"
    docker exec $container_name yarn add $dependency
fi




#yarn add prop-types
#yarn add escape-string-regexp
#yarn add sort-by
