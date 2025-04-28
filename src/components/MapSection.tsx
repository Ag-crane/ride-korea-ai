
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Bike, Navigation } from 'lucide-react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapSection = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState<boolean>(true);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken || mapboxToken === '') return;

    if (map.current) return; // prevent duplicate initialization

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [127.7669, 35.9078], // Center on South Korea
      zoom: 7,
      pitch: 30
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add typical Korean cycling routes when map loads
    map.current.on('load', () => {
      if (!map.current) return;
      
      // Sample bike routes for South Korea (simplified)
      const hanRiverRoute = {
        'type': 'Feature',
        'properties': {},
        'geometry': {
          'type': 'LineString',
          'coordinates': [
            [126.9019, 37.5354],
            [126.9381, 37.5293],
            [126.9691, 37.5268],
            [127.0033, 37.5280],
            [127.0215, 37.5236],
            [127.0518, 37.5268],
            [127.0874, 37.5292]
          ]
        }
      };

      const eastCoastRoute = {
        'type': 'Feature',
        'properties': {},
        'geometry': {
          'type': 'LineString',
          'coordinates': [
            [129.3588, 36.0718],
            [129.3799, 35.9920],
            [129.4398, 35.9120],
            [129.4284, 35.8368],
            [129.3819, 35.7681]
          ]
        }
      };
      
      // Add source for bike routes
      map.current.addSource('routes', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [hanRiverRoute, eastCoastRoute]
        }
      });
      
      // Add bike route layer
      map.current.addLayer({
        'id': 'route-lines',
        'type': 'line',
        'source': 'routes',
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-color': '#4361EE',
          'line-width': 5,
          'line-opacity': 0.8
        }
      });

      // Add markers for popular starting points
      const addMarker = (lngLat: [number, number], name: string) => {
        const markerElement = document.createElement('div');
        markerElement.className = 'flex items-center justify-center w-10 h-10 bg-primary rounded-full shadow-lg';
        markerElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2"/></svg>';
        
        new mapboxgl.Marker(markerElement)
          .setLngLat(lngLat)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML(`<h3 class="font-bold">${name}</h3><p>인기 자전거 코스</p>`)
          )
          .addTo(map.current!);
      };

      // Add markers for popular cycling spots
      addMarker([126.9181, 37.5354], '한강 자전거길');
      addMarker([129.3588, 36.0718], '동해안 자전거길');
      addMarker([127.3859, 36.3504], '금강 자전거길');
    });

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('mapbox-token', mapboxToken);
    setShowTokenInput(false);
  };

  // Check localStorage for token on mount
  useEffect(() => {
    const savedToken = localStorage.getItem('mapbox-token');
    if (savedToken) {
      setMapboxToken(savedToken);
      setShowTokenInput(false);
    }
  }, []);

  return (
    <section id="map" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            국내 자전거 경로 데이터 기반
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            한국의 자전거 도로와 추천 코스에 최적화된 지도 데이터로 
            더 정확하고 안전한 라이딩을 경험하세요.
          </p>

          {showTokenInput && (
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="mb-2 text-sm">맵박스 퍼블릭 토큰이 필요합니다. <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary">mapbox.com</a>에서 가입 후 토큰을 얻을 수 있습니다.</p>
              <form onSubmit={handleTokenSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Mapbox 퍼블릭 토큰 입력"
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                />
                <Button type="submit">확인</Button>
              </form>
            </div>
          )}
        </div>
        
        <div className="relative rounded-2xl overflow-hidden shadow-xl mb-10 aspect-[16/9]" style={{minHeight: '500px'}}>
          {mapboxToken ? (
            <div ref={mapContainer} className="absolute inset-0"></div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <div className="text-white text-center px-4">
                <Bike className="mx-auto h-16 w-16 mb-4" />
                <h3 className="text-xl font-semibold mb-2">맵박스 토큰이 필요합니다</h3>
                <p className="max-w-md">한국의 자전거 경로를 표시하기 위해 맵박스 토큰을 입력해주세요.</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <Navigation className="h-5 w-5 text-primary mr-2" />
              <h3 className="text-lg font-semibold">정확한 고도 정보</h3>
            </div>
            <p className="text-gray-600">국내 지형 데이터를 활용한 정밀한 고도 정보로 언덕과 경사를 미리 예측하세요.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <Bike className="h-5 w-5 text-primary mr-2" />
              <h3 className="text-lg font-semibold">자전거 도로 최적화</h3>
            </div>
            <p className="text-gray-600">전국 자전거 도로와 추천 코스를 쉽게 탐색하고 내비게이션 할 수 있습니다.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <Navigation className="h-5 w-5 text-primary mr-2" />
              <h3 className="text-lg font-semibold">실시간 경로 업데이트</h3>
            </div>
            <p className="text-gray-600">공사, 폐쇄 등의 정보를 실시간으로 반영하여 항상 최적의 경로를 안내합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
