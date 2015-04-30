json.array!(@reservations) do |reservation|
  json.extract! reservation, :id, :checkin, :checkout, :number_of_guests, :space_id, :traveler_id
  json.url reservation_url(reservation, format: :json)
end
