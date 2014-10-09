if @cases.present?
  json.cases @cases do |c|
    json.first_name    c.customer.first_name
    json.last_name     c.customer.last_name
    json.labels        c.labels
    json.subject       c.subject
    json.status        c.status
    json.updated       c.updated_at.to_date.strftime("%d/%m/%Y")
    json.priority      c.priority
  end
else
  json.filters []
end