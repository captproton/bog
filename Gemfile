source 'https://rubygems.org'

gem 'bundler', '>= 1.8.4'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.1'

# Loads environment variables from `.env`.
gem 'dotenv-rails', :groups => [:development, :test]

# Use postgresql as the database for Active Record
gem 'pg'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc
# this was extracted for Rails 4
gem 'responders', '~> 2.0' 

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'

  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring', group: :development
  # rails console alternative
  gem 'pry-rails', :group => :development
  
  
  # App-specfic
  gem 'passenger', "~> 5.0.1"
  gem 'guard'
  gem 'guard-minitest'
  # gem 'guard-passenger', '~> 0.6.0' # the code for this gem needs to be updated
  gem "guard-bundler", "~> 2.0.0"
  gem 'rr', '~> 1.1.2'
  gem 'minitest-spec-rails'
  # gem 'activerecord-nulldb-adapter', :git => 'git://github.com/nulldb/nulldb.git'
  gem 'database_cleaner', '~> 1.4.0'
  gem 'travis', '~> 1.7.4'
  # gem 'redis-browser', '~> 0.3.2'
  
end

# App specfic gems
# icons
gem 'fontawesome-rails', '~> 4.0.3.0'
# front-end resources
source 'https://rails-assets.org' do
  gem 'rails-assets-normalize-css'
  gem 'rails-assets-bootstrap'
  gem 'rails-assets-jquery-ui'
end
# Geocoding lat-lng
gem 'geocoder', '~> 1.2.8'
# Place autocomplete
gem 'geocomplete_rails', '~> 1.6.4'
# pass variables from the controller to js
gem 'gon', '~> 5.2.3'
gem 'calendar_helper'
# gem 'flickr_fu', '~> 0.3.2'
gem 'figaro'
gem 'faker'
gem 'launchy'
gem 'kaminari', '~> 0.16.3'

gem 'high_voltage', '~> 2.2.1' # static pages
# instant backend
gem 'rails_admin', '~> 0.6.6'
# Wicked is a Rails engine for producing easy wizard controllers
gem 'wicked'
# User Authentication
gem 'devise', '~> 3.4.1'
gem 'omniauth-facebook'
gem 'omniauth-twitter'


## Image uploading to S3
# Carrierwave enables image upload
gem 'carrierwave', '~> 0.10.0'
# gem 'carrierwave_direct'
gem 'fog', '~> 1.28.0'
# gem "fog-aws"
gem 'sidekiq'
gem 'rmagick', '~> 2.13.4'
gem 'jquery-fileupload-rails', '~> 0.4.5'

# better Heroku
gem 'rails_12factor', '~> 0.0.3'
