require 'rails_helper'
require "desk"

RSpec.describe HomeController, :type => :controller do


  describe "GET index" do
    it "returns http success" do
      get :index
      expect(response).to be_success
    end
  end

  describe "GET labels" do
    it "returns http success" do
      get :labels
      expect(response).to be_success
    end
  end

  describe "GET filters" do
    it "returns http success" do
      get :filters
      expect(response).to be_success
    end
  end

  describe "GET assign_label" do
    it "returns http success" do
      get :assign_label
      expect(response).to be_success
    end
  end

end
