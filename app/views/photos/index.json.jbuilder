json.array!(@photos) do |photo|
  json.extract! photo, :id, :name, :image
  json.url photo_url(photo, format: :json)
end
