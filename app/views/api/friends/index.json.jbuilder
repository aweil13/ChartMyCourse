@friendships.each do |friendship|
    json.set! friendship.id do
        json.partial! 'friend', friendship: friendship
    end
end