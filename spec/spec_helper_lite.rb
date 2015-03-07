ENV['RAILS_ENV'] ||= 'test'

require 'minitest/autorun'
require 'rr'
require 'ostruct'
 
class MiniTest::Unit::TestCase
  # include RR::Adapters::MiniTest
end
 
def stub_module(full_name, &block)
  stub_class_or_module(full_name, Module)
end
 
def stub_class(full_name, &block)
  stub_class_or_module(full_name, Class)
end
 
def stub_class_or_module(full_name, kind, &block)
  full_name.to_s.split(/::/).inject(Object) do |context, name|
    begin
      context.const_get(name)
    rescue NameError
      context.const_set(name, kind.new)
    end
  end
end
 
module SpecHelpers
  def setup_nulldb
    # require 'nulldb/rails'
    # # schema_path = File.expand_path('../db/schema.rb', File.dirname(__FILE__))
    # # NullDB.nullify(:schema => schema_path)
    # ActiveRecord::Base.establish_connection :adapter => :nulldb
    
  end
 
  def teardown_nulldb
    # NullDB.restore
  end
end