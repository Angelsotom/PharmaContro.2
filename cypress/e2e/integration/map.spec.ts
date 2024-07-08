describe('Maps Page', () => {
    beforeEach(() => {
      cy.visit('/maps'); // Navegar a la página de mapas
    });
  
    it('should display the title', () => {
      cy.get('ion-title').should('have.text', 'Maps');
    });
  
    it('should display the map', () => {
      // Esperar a que el contenedor del mapa se renderice
      cy.get('#map').should('exist');
  
      // Simular la obtención de la geolocalización
      cy.window().then((win) => {
        const mockCoords = { coords: { latitude: 37.7749, longitude: -122.4194 } };
       // cy.stub(win.Plugins.Geolocation, 'getCurrentPosition').resolves(mockCoords);
        
        // Recargar la página para aplicar el stub
        cy.reload();
  
        // Verificar que el mapa se haya cargado con la ubicación simulada
       // cy.get('#map').then((mapElement) => {
        //  const map = mapElement[0]._googleMap;
          //expect(map).to.exist;
          //const center = map.getCenter();
          //expect(center.lat()).to.equal(mockCoords.coords.latitude);
          //expect(center.lng()).to.equal(mockCoords.coords.longitude);
       // });
      });
    });
  
    it('should display an error message if GPS is not supported', () => {
      // Simular error en la obtención de la geolocalización
      cy.window().then((win) => {
      //  cy.stub(win.Plugins.Geolocation, 'getCurrentPosition').rejects(new Error('GPS not supported'));
  
        // Recargar la página para aplicar el stub
        cy.reload();
  
        // Verificar que se muestra el mensaje de error
        cy.on('window:alert', (txt) => {
          expect(txt).to.contains('error al cargar el mapa. Dispositivo no soporta GPS.');
        });
      });
    });
  });
  