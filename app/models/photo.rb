class Photo < ActiveRecord::Base
  belongs_to :location
  mount_uploader :image, ImageUploader
  
  def image_name
    File.basename(image.path || image.filename) if image
  end

  def rank_by_desirability
    order("desirability")
  end
end
