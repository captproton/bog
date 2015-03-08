require 'date'
require 'active_record'
 
class Space < ActiveRecord::Base
  validates :title,      :presence => true #, :if => :active_or_title?

  attr_accessor :lodging
  
  def publish(clock=DateTime)
    return false unless valid?
    self.pubdate = clock.now
    @lodging.add_entry(self)
  end

  def active?
    status == 'active'
  end

  # def active_or_title?
  #   status.include?('title') || active?
  # end

end
