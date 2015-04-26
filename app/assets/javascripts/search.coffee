# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

# alert(gon.city_state)

L.mapbox.accessToken = 'pk.eyJ1IjoiY2FwdHByb3RvbiIsImEiOiI3cDFLWWRnIn0.guU68dUaxKCX_MPrZHAesQ'

showMap = (err, data) ->
  # The geocoder can return an area, like a city, or a
  # point, like an address. Here we handle both cases,
  # by fitting the map bounds to an area or zooming to a point.
  if data.lbounds
    map.fitBounds data.lbounds
  else if data.latlng
    map.setView [
      data.latlng[0]
      data.latlng[1]
    ], 13
  return

geocoder = L.mapbox.geocoder('mapbox.places')
map = L.mapbox.map('map', 'captproton.lj0nb69m')
geocoder.query gon.city_state, showMap

url = '/search.json'

load = ->
  # As with any other AJAX request, this technique is subject to the Same Origin Policy:
  # http://en.wikipedia.org/wiki/Same_origin_policy the server delivering the request should support CORS.
  $.ajax
    dataType: 'json'
    url: url
    success: (geojson) ->
      # On success add fetched data to the map.
      L.mapbox.featureLayer(geojson).addTo map
      return
  return
#
$ load