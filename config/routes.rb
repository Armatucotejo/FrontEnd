Rails.application.routes.draw do
  get "welcome/index"
  get "register" => "welcome#register"
  resources :users
  #=> "welcome#register"
  post "welcome/register"
  root "welcome#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
