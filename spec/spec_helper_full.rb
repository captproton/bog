ENV["RAILS_ENV"] ||= "test"
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'

class ActiveSupport::TestCase
  ActiveRecord::Migration.check_pending!
  DatabaseCleaner.strategy = :truncation
  before { DatabaseCleaner.start }
  after  { DatabaseCleaner.clean } 
end
# require_relative 'spec_helper_lite'
# require_relative '../config/environment.rb'
# require 'database_cleaner'
#
# module SpecHelpers
#   def setup_database
#     DatabaseCleaner.strategy = :transaction
#     DatabaseCleaner.clean_with(:truncation)
#     DatabaseCleaner.start
#   end
#
#   def teardown_database
#     DatabaseCleaner.clean
#   end
# end
#
