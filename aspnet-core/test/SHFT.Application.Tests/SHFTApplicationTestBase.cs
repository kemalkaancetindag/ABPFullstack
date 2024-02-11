using Volo.Abp.Modularity;

namespace SHFT;

public abstract class SHFTApplicationTestBase<TStartupModule> : SHFTTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
