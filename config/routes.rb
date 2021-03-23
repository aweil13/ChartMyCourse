Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    root to: 'root#root'
    namespace :api, defaults: {format: :json} do
      resource :session, only: %i[create destroy]
      resources :users, only: %i[create]
      resources :courses, only: %i[index show create]
    end
end
