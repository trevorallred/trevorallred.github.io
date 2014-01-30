#/bin/bash

export GITHUB=https://codeload.github.com/trevorallred/resume-io/zip/master


export RESUME_HOME="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
export WORKING_DIR=$RESUME_HOME/.resume-io-temp

echo "Downloading latest Resume IO version from Github"
rm -Rf $WORKING_DIR
mkdir $WORKING_DIR
cd $WORKING_DIR
curl -o master.zip https://codeload.github.com/trevorallred/resume-io/zip/master
unzip -q master.zip

echo "Removing old app directory"
rm -Rf $RESUME_HOME/app

echo "Coping over new files"
cp -R resume-io-master/app $RESUME_HOME/

echo "Cleaning up"
rm -Rf $WORKING_DIR
rm -Rf $RESUME_HOME/app/lib

