using Volo.Abp.Modularity;

namespace SHFT;

/* Inherit from this class for your domain layer tests. */
public abstract class SHFTDomainTestBase<TStartupModule> : SHFTTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
