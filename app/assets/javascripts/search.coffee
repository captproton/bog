# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/


L.mapbox.accessToken = 'pk.eyJ1IjoiY2FwdHByb3RvbiIsImEiOiI3cDFLWWRnIn0.guU68dUaxKCX_MPrZHAesQ'
# Mapbox.js can easily be used in CoffeeScript, and use
# all fancy CoffeeScript functionality

url = '/search.json'
alert url
geocoder = L.mapbox.geocoder('mapbox.places')
map = L.mapbox.map('map', 'examples.map-h67hf2ic').setView([
  41.22086
  -112.000523
], 13)

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

$ load