require 'date'
require 'active_record'
 
class Space < ActiveRecord::Base
  validates :title, :presence => true

  attr_accessor :lodging
  
  def publish(clock=DateTime)
    return false unless valid?
    self.pubdate = clock.now
    @lodging.add_entry(self)
  end
  
end
