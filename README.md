# SPACE-MISSION-CONTROL

creating individual repos
ng new space-shell-app --routing --style=scss
ng new space-ship-mfe --routing --style=scss
ng new space-station-mfe --routing --style=scss
ng new astronaut-mfe --routing --style=scss

To start individual application
cd .\space-shell-app\
ng s -o

cd .\astronaut-mfe\
ng s -o

cd .\space-ship-mfe\
ng s -o

cd .\space-station-mfe\
ng s -o


ng add @angular-architects/module-federation --project space-shell-app --port 4200

To uninstall
npm uninstall @angular-architects/module-federation ngx-build-plus

ng add @angular-architects/module-federation@17 --project space-shell-app --port 4200
ng add @angular-architects/module-federation@17 --project astronaut-mfe --port 4300
ng add @angular-architects/module-federation@17 --project space-ship-mfe --port 4400
ng add @angular-architects/module-federation@17 --project space-station-mfe --port 4500

To create a module
ng g m spaceship --routing
ng g c spaceship
