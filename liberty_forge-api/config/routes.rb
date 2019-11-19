Rails.application.routes.draw do
  resources :homepages
  scope :api do
    resources :notes, except: [:new, :edit]
    resources :users, except: [:new, :edit]
  end
=begin

  get '/landlords/index', :to => 'landlords#index', :as => :index
  post 'landlords/:id/props/new', :to => 'props#create'

  resources :landlords do
  	resources :props do 
  	  #resources :floor_plans, only: [:larger_than_4_tenants]
    end
  end
  resources :tenants


  #root 'home#index'
=end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
