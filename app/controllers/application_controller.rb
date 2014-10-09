class ApplicationController < ActionController::Base

  #protect_from_forgery with: :exception
  before_action :get_desk
  
  def get_desk
    require "rubygems"
    require "desk"

    Desk.configure do |config|
      config.support_email = "help@example.com"
      config.subdomain = "smalipeddi"
      config.consumer_key = "1cZsgY8wxcGDpl1v9zM6"
      config.consumer_secret = "8tkyDfINxzJBzx9a5na6tYLNLKhRRcP6dj5yDUvQ"
      config.oauth_token = "AdROopbDFc21aWajsO8o"
      config.oauth_token_secret = "jDI2d8phCnPbzNANG9WBeDFubKHfYFGVvW0MKM"
    end 
  end
  
end
