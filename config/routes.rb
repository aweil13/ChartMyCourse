Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    root to: 'root#root'
    namespace :api, defaults: {format: :json} do

      get '/users/friends', to: 'users#user_friends', as: 'user_friends' 

      resource :session, only: %i[create destroy]
      resources :users, only: %i[create index show] do
        resources :courses, only: %i[index]
        resources :friends, only: %i[index]
      end

      resources :friends, only: %i[create destroy]
      resources :comments, only: %i[create destroy update]
      resources :courses, only: %i[show create update destroy] do
        resources :comments, only: %i[index]
      end
    end
end
