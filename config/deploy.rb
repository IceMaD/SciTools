lock "3.8.1"

set :application, "SciTools"
set :repo_url, "git@github.com:IceMaD/SciTools.git"

set :npm_target_path, -> { release_path.join('node_modules') } # default not set
set :npm_flags, '--production --silent --no-progress'    # default
set :npm_roles, :all                                     # default

# append :linked_files, "config/database.yml", "config/secrets.yml"

append :linked_dirs, "node_modules"
