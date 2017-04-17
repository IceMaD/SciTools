# config valid only for current version of Capistrano
lock '3.7.1'

set :use_sudo, false

set :application, 'abc'
set :repo_url, 'git@github.com:IceMaD/abc_user_manager.git'

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, '/var/www/abc'

# Default value for :linked_files is []
append :linked_files, 'app/config/parameters.yml'

# Default value for linked_dirs is []
# append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"

set :linked_dirs, %w(var/logs var/sessions var/backup var/export)

set :file_permissions_paths, ['var']
set :file_permissions_users, ['www-data']
set :permission_method, :acl

set :format_options, log_file: 'var/logs/capistrano.log', truncate: 140