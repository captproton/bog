class SearchController < ApplicationController
  respond_to :html, :xml, :json
  def index
    @search = @lodging.entries    
    @geojson = Array.new

    @search.each do |room|
      @geojson << {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [room.longitude, room.latitude]
        },
        properties: {
          name: room.title,
          address: room.street_address,
          :'marker-color' => '#00607d',
          :'marker-symbol' => 'circle',
          :'marker-size' => 'medium'
        }
      }
    end
    
    respond_to do |format|
      format.html
      format.json { render json: @geojson }
    end    
  end
end
