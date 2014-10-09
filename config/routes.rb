Desk::Application.routes.draw do
  root 'home#index'   
  get "home/create_label"    
  get 'filters' =>'home#filters', as: :filters, :defaults => { :format => 'json' }
  get 'labels' =>'home#labels', as: :labels, :defaults => { :format => 'json' } 
  get 'get_cases' =>'home#get_cases', as: :cases, :defaults => { :format => 'json' }
  get 'new_label' =>'home#new_label', as: :new_label
  
  post "home/create_label", :defaults => { :format => 'json' } 
  
  get 'assign_label' =>'home#assign_label', as: :assign_label, :defaults => { :format => 'json' }
  post "home/update_case_label", :defaults => { :format => 'json' }
  
end
