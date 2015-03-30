class SearchController < ApplicationController
  respond_to :html, :xml, :json
  def index
    city_state = Space.city_state_string(params[:place]) if params[:place]
    gon.city_state = city_state if params[:place]
    
    @search = Space.search(params[:place])
    @geojson = Array.new

    @search.each do |room|
      @geojson << {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [room.longitude, room.latitude]
        },
        properties: {
          properties: {
            'marker-size': 'large',
            'marker-color': '#00607d',
            'marker-symbol': 'circle'
          }
        }
      }
    end
    
    respond_to do |format|
      format.html
      format.json { render json: @geojson }
    end    
  end
end
