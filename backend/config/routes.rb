Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index" 

  get 'users', to: 'users#index'
  get 'users/:id', to: 'users#show'
  post 'users', to: 'users#create'
  patch 'users/:id', to: 'users#update'
  delete 'users/:id', to: 'users#destroy'

  get 'games', to: 'games#index'
  get 'games/:id', to: 'games#show'
  post 'games', to: 'games#create'
  patch 'games/:id', to: 'games#update'
  delete 'games/:id', to: 'games#destroy' 

  get 'signup', to: 'users#create'
  get 'me', to: 'users#show'
  post 'login', to: 'sessions#create'  
  delete 'logout', to: 'sessions#destroy'  
end 
