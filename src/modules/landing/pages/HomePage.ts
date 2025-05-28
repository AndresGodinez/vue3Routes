import {
  defineComponent, onActivated,
  onBeforeMount, onBeforeUnmount,
  onBeforeUpdate, onDeactivated, onErrorCaptured,
  onMounted, onRenderTracked, onRenderTriggered,
  onUnmounted,
  onUpdated, ref,
} from 'vue';

import {
  CodeBracketIcon,
  LockClosedIcon,
  Square3Stack3DIcon,
  BeakerIcon,
  CheckIcon
} from '@heroicons/vue/24/outline';



export default defineComponent({
  components: {
    CodeBracketIcon,
    LockClosedIcon,
    Square3Stack3DIcon,
    BeakerIcon,
    CheckIcon
  },
  setup: () => {
    const title = 'Welcome to Vue SPA';
    const counter = ref(0);
    const incrementCounter = () => {
      counter.value++;
    };
    console.log({ title });

    onMounted(() => {
      console.log('onMounted');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });
    onUnmounted(() => {
      console.log('onUnmounted');
    });
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });
    onErrorCaptured(() => {
      console.log('onErrorCaptured');
    });
    onRenderTracked(() => {
      console.log('onRenderTracked');
    });
    onRenderTriggered(() => {
      console.log('onRenderTriggered');
    });
    onActivated(() => {
      console.log('onActivated');
    });
    onDeactivated(() => {
      console.log('onDeactivated');
    });
    console.log('setup');
    const testingBenefits = [
      'Detección temprana de errores',
      'Refactorización segura',
      'Documentación viva del código',
      'Confianza en despliegues'
    ];
    const getBenefitDescription = (benefit: string): string => {
      const descriptions: Record<string, string> = {
        'Detección temprana de errores': 'Identifica problemas antes de llegar a producción, reduciendo costos de corrección.',
        'Refactorización segura': 'Permite mejorar el código con confianza, manteniendo la funcionalidad existente.',
        'Documentación viva del código': 'Las pruebas sirven como ejemplos prácticos de cómo usar el código.',
        'Confianza en despliegues': 'Mayor seguridad al realizar actualizaciones y nuevos lanzamientos.'
      };
      return descriptions[benefit] || '';
    };
    const techStack = [
      {
        category: 'Core',
        items: ['Vue 3', 'TypeScript', 'Vite', 'Vue Router']
      },
      {
        category: 'Calidad',
        items: ['Vitest', 'ESLint', 'Oxlint', 'Prettier']
      },
      {
        category: 'UI/UX',
        items: ['TailwindCSS', 'Responsive Design', 'Layouts Anidados']
      }
    ];

    const features = [
      {
        title: 'Autenticación',
        description: 'Sistema completo con guards y rutas protegidas.',
        icon: LockClosedIcon
      },
      {
        title: 'Arquitectura Modular',
        description: 'Estructura organizada por módulos: auth, landing, common.',
        icon: Square3Stack3DIcon
      },
      {
        title: 'Testing',
        description: 'Coverage completo con Vitest y Vue Test Utils.',
        icon: BeakerIcon
      }
    ];

    return {
      title,
      counter,
      incrementCounter,
      techStack,
      features,
      testingBenefits,
      getBenefitDescription
    };
  },
});
