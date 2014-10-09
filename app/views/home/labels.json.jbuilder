if @labels.present?
  json.labels @labels do |label|
    json.name    label.name
    json.id      label.id
  end
else
  json.labels []
end