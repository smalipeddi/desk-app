if @filters.present?
  json.filters @filters do |filter|
    json.name    filter.name
    json.id      filter.id
  end
else
  json.filters []
end