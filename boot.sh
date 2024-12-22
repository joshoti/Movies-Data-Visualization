#!/bin/bash

git clone https://github.com/joshoti/Movies-Data-Visualization.git
rm boot.sh
cd Movies-Data-Visualization

npm install

echo "\nSetup complete. Running app"

npm run start
