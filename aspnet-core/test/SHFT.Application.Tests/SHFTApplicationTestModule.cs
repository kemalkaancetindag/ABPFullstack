using Volo.Abp.Modularity;

namespace SHFT;

[DependsOn(
    typeof(SHFTApplicationModule),
    typeof(SHFTDomainTestModule)
)]
public class SHFTApplicationTestModule : AbpModule
{

}
