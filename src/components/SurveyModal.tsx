
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Dialog, DialogContent, DialogHeader, DialogTitle, 
  DialogFooter, DialogDescription 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { 
  Form, FormControl, FormField, FormItem, 
  FormLabel, FormMessage, FormDescription 
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/sonner';

const formSchema = z.object({
  hasCurrentApp: z.enum(['yes', 'no'], {
    required_error: '현재 사용중인 앱이 있는지 선택해주세요.',
  }),
  painPoints: z.array(z.string()).optional().refine(
    (val) => {
      // painPoints is required only if hasCurrentApp is 'yes'
      return !(val === undefined || val.length === 0);
    }, 
    { message: '불편했던 점을 하나 이상 선택해주세요.' }
  ).optional(),
  customPainPoint: z.string().optional(),
  desiredFeatures: z.string().optional(),
  email: z.string().email('유효한 이메일 주소를 입력해주세요.').optional().or(z.literal('')),
});

type FormValues = z.infer<typeof formSchema>;

interface SurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const painPointOptions = [
  { id: 'inaccurate-tracking', label: '위치 추적이 부정확함' },
  { id: 'wrong-directions', label: '경로 안내가 엉뚱함' },
  { id: 'language-barrier', label: '영어 위주라 불편함' },
  { id: 'screen-difficulty', label: '주행 중 화면 보기 불편/위험' },
  { id: 'complex-interface', label: '인터페이스가 복잡함' },
  { id: 'none', label: '없음' },
  { id: 'other', label: '기타 (직접 입력)' },
];

const SurveyModal: React.FC<SurveyModalProps> = ({ isOpen, onClose }) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hasCurrentApp: undefined,
      painPoints: [],
      customPainPoint: '',
      desiredFeatures: '',
      email: '',
    },
  });

  const watchHasCurrentApp = form.watch('hasCurrentApp');
  const watchPainPoints = form.watch('painPoints') || [];
  const showCustomPainPoint = watchPainPoints.includes('other');

  const onSubmit = (data: FormValues) => {
    console.log('Survey data:', data);
    toast.success('설문에 응해주셔서 감사합니다!');
    onClose();
    // Here you would typically send the data to your backend
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">라이딩 메이트 AI 사전 설문조사</DialogTitle>
          <DialogDescription>
            더 나은 서비스를 위해 간단한 설문에 응해주세요.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="hasCurrentApp"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="font-medium">
                    현재 사용중인 자전거 앱이 있나요? <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex flex-row gap-4"
                    >
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="yes" />
                        </FormControl>
                        <FormLabel className="font-normal">있음</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="no" />
                        </FormControl>
                        <FormLabel className="font-normal">없음</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {watchHasCurrentApp === 'yes' && (
              <FormField
                control={form.control}
                name="painPoints"
                render={() => (
                  <FormItem>
                    <div className="mb-2">
                      <FormLabel className="font-medium">
                        기존 앱을 사용하면서 불편했던 점은 무엇인가요? (복수 선택 가능) <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormDescription>
                        해당하는 항목을 모두 선택해주세요.
                      </FormDescription>
                    </div>
                    <div className="space-y-2">
                      {painPointOptions.map((option) => (
                        <FormField
                          key={option.id}
                          control={form.control}
                          name="painPoints"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={option.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(option.id)}
                                    onCheckedChange={(checked) => {
                                      const updatedValue = checked
                                        ? [...(field.value || []), option.id]
                                        : field.value?.filter(
                                            (value) => value !== option.id
                                          ) || [];
                                      field.onChange(updatedValue);
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {option.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {showCustomPainPoint && (
              <FormField
                control={form.control}
                name="customPainPoint"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>기타 불편한 점을 적어주세요</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="직접 입력해주세요"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="desiredFeatures"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">추가적으로 원하는 기능이 있나요?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="원하는 기능을 자유롭게 적어주세요."
                      className="min-h-[80px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">출시 알림을 받으시겠어요?</FormLabel>
                  <FormDescription>
                    이메일을 입력하시면 앱 출시 소식을 가장 먼저 알려드립니다.
                  </FormDescription>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="이메일 주소"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="button" variant="outline" onClick={onClose}>
                취소
              </Button>
              <Button type="submit">제출하기</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default SurveyModal;
