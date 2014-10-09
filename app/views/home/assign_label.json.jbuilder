if @labels.present?
  json.labels @labels do |label|
    json.name label.name
    json.id   label.id
  end
else
  json.labels []
end

if @cases.present?
  json.cases @cases do |c|
    json.id   c.id
    json.subject c.subject
  end
end