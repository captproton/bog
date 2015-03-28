require 'date'
require 'active_record'
 
class Space < ActiveRecord::Base
  validates :title,      :presence => true #, :if => :active_or_title?
  has_many :photos
  has_one :amenity_group
  accepts_nested_attributes_for :amenity_group
  geocoded_by :address
  after_validation :geocode, if: :street_address_changed?
  
  attr_accessor :lodging

  # mount_uploaders :images, ImageUploader
  
  def publish(clock=DateTime)
    return false unless valid?
    self.pubdate = clock.now
    @lodging.add_entry(self)
  end

  def active?
    status == 'active'
  end

  def self.search(search)
    if search
      place_array = search.split(", ")
      city_name = place_array[0]
      state_name = place_array[-2]
      Space.where('city LIKE ?', "%#{city_name}%").where('state LIKE ?', "%#{state_name}%")
    else
      Space.all
    end
  end
  
  def address
    "#{street_address}, #{city}, #{state}"
  end
  # def active_or_title?
  #   status.include?('title') || active?
  # end

end
