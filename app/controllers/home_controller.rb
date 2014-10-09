class HomeController < ApplicationController 
  #for index and new label actions dont want to connect with desk api, so skipping get_desk(of application controller) method for them
  skip_before_action :get_desk, only: [:index,:new_label]
  respond_to :json
   
  def index    
  end
  
  def get_cases
    @cases = Desk.filter_cases(params[:filter_id].to_i)   
  end
  
  def new_label 
  end
  
  def create_label
    unless params[:name].blank?
      Desk.create_label(
      :name => params[:name],
      :description => "Added from App",
      :types => [ "case", "macro" ],
      :color => "green"
     ) 
     render :json => {:is_any_error => false}
    else
      render :json => {:is_any_error => true}
    end
  end
  
  def assign_label
    @labels = Desk.labels
    @cases = Desk.cases   
  end 
  
  def update_case_label
    Desk.update_case(params[:case].to_i, :labels => [ params[:label] ])
    # redirect_to root_url
    render :json => {:is_updated => true}
  end
  
  def filters
    @filters = Desk.filters
  end
  
  def labels
    @labels = Desk.labels
  end
  
end
