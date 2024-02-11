using Volo.Abp.Modularity;

namespace SHFT;

[DependsOn(
    typeof(SHFTDomainModule),
    typeof(SHFTTestBaseModule)
)]
public class SHFTDomainTestModule : AbpModule
{

}
